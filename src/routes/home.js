const Instruction = () => import('@/components/home/Instruction.vue')
const Company = () => import('@/components/home/Company.vue')

export default [
    {
        path: '/instruction',
        name: 'Instruction',
        component: Instruction,
        meta: {
            title: '公司简介',
            keepAlive: true
        }
    },
    {
        path: '/company',
        component: Company,
        name: 'Company',
        meta: {
            title: '合伙人',
            keepAlive: true
        }

    }
    
]