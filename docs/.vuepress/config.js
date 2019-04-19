module.exports = {
    title: 'VueWheels UI',
    description: '这是为了加深对Vue的理解才做的',
    themeConfig: {
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
                '/components/button'    
            ]
          }
          
        ]
    }
}