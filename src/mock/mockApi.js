import Mock from 'mockjs'
import BaseUrl from '../config/config'

Mock.mock(`${BaseUrl}/getUserInfo`, {
    'code': 200,
    'data':
    {
        'userInfo': {
            'name': 'cuizongbao',
            'age': 20,
            'gengder': 'man'
        }
    },
    'message': '操作成功',
    'systemDate': new Date().getTime()
});

Mock.mock(`${BaseUrl}/getMenuList`, 'post', {
    'code': 200,
    'data':
    {
        'menuList': [
            {
                'id': 1,
                'title': '首页',
                'status': 1
            },
            {
                'id': 2,
                'title': '关于我们',
                'status': 2
            },
            {
                'id': 3,
                'title': '我的',
                'status': 3
            },
            {
                'id': 4,
                'title': '消息',
                'status': 4
            }
        ]
    },
    'message': '操作成功',
    'systemDate': new Date().getTime()
});
