import Mock from 'mockjs'
import BaseUrl from '../config/config'

Mock.mock(`${BaseUrl}/getUserInfo`, {
  'code': 200,
  'data': {
    'name': 'cuizongbao',
    'age': 20,
    'gengder': 'man'
  },
  'message': '操作成功',
  'systemDate': new Date().getTime()
})

Mock.mock(`${BaseUrl}/getMenuList`, 'post', {
  'code': 200,
  'data': [
    {
      'title': '用户信息',
      'icon': 'ios-people',
      'children': [
        {
          'title': '设置用户',
          'icon': 'ios-person-add-outline',
          'router': '/setUser'
        },
        {
          'title': '用户列表',
          'icon': 'ios-person',
          'router': '/userList'
        }
      ]
    },
    {
      'title': '系统信息',
      'icon': 'md-albums',
      'children': [
        {
          'title': '合作伙伴',
          'icon': 'md-cube',
          'router': '/company'
        },
        {
          'title': '公司介绍',
          'icon': 'md-planet',
          'router': '/instruction'
        }
      ]
    }
  ],
  'message': '操作成功',
  'systemDate': new Date().getTime()
})
