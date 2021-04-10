"""
AUTHOR:         zeng_xiao_yu
GITHUB:         https://github.com/zengxiaolou
EMAIL:          zengevent@gmail.com
TIME:           2021/3/29 13:31
INSTRUCTIONS:   文件简介
"""
import json
import re
from time import sleep
from typing import Optional, Any
from pydantic import BaseModel
import requests
from name.settings import BAIDUKEY, BAIDUSECRET
from loguru import logger as log


def get_baidu_access_token():
    token_res = requests.get(f'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id={BAIDUKEY}'
                             f'&client_secret={BAIDUSECRET}')
    token_res = json.loads(token_res.text)
    return token_res['access_token']


def get_word_explain(access_token, word):
    url = f'https://aip.baidubce.com/rpc/2.0/kg/v1/cognitive/chinese_search?access_token={access_token}'
    headers = {
        "content-type": "application/json"
    }
    data = {
        "query": word,
        "queryType": "entity"
    }
    data = json.dumps(data)
    word_res = requests.post(url, data=data)
    word_res = json.loads(word_res.text)
    log.debug(word_res)
    if not word_res.get('error_code', '') and len(word_res['result']) > 0:
        answer = word_res['result'][0]['response']['answer']
        print(answer)
        if isinstance(answer, list) and len(answer) == 1:
            answer = answer[0]
        elif isinstance(answer, list) and len(answer) > 1:
            answer1 = ''
            for i in answer:
                if answer1:
                    answer1 = answer1 + ',' + i
                else:
                    answer1 = i
            answer = answer1
        if "拼音" in word:
            tone = word_res['result'][0]['response']['voice']
            pattern = re.compile(r'，(.*)声')
            tone = pattern.findall(tone)[0]
            tone1 = ''
            if '一(yi1)' in tone:
                tone1 = '一'
            if '二(er4)' in tone:
                tone1 = tone1 + ',' + '二'
            if '三(san1)' in tone:
                tone1 = tone1 + ',' + '三'
            if '四(si4)' in tone:
                tone1 = tone1 + ',' + '四'
            if tone1.startswith(','):
                tone = tone1[1:]
            else:
                tone = tone1
            return answer, tone
        return answer
    else:
        return get_word_explain(access_token, word)


# 基础模型
class JsonModel(BaseModel):
    code: Optional[int] = 1001
    success: Optional[bool] = True
    msg: str = None
    results: Any = None


if __name__ == '__main__':
    access_token = get_baidu_access_token()
    get_word_explain(access_token, '荆吴相接水为乡，君去春江正淼茫的出处')

