module.exports = {
    base:"/Vue-wheel/",
    title: 'VueWheels UI',
    description: '这是为了加深对Vue的理解才做的,奴前只有几个比较简单的轮子，后面会陆续增加',
    themeConfig: {
      displayAllHeaders: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
          '/',
        //   '/install/',
        //   '/get-started/',
        //   '/components/']
          {
            title: '入门',
            children: [
                '/install/',
                '/get-started/',
            ]
          },
          {
            title: '组件',
            children: [
                '/components/button',
                '/components/button-group' ,
                '/components/input',
                '/components/grid',
                '/components/container',
                '/components/tabs',
                '/components/popover',
                '/components/toast'      
            ]
          }
          
        ]
    }
}