/**

 description: converting to posts variable to postsGroupedByTags variable

 const pasts = [
    {
        title: 'post 1',
        tags: 'html'
    },
    {
        title: 'post 2',
        tags: 'js'
    },
    {
        title: 'post 3',
        tags: ['js', 'nodejs']
    },
    {
        title: 'post 4',
        tags: ['js', 'reactjs']
    },
    {
        title: 'post 5',
        tags: 'tailwind'
    }
]

const postsGroupedByTags = {
    "html": [
        {"title":"post 1","tags":"html"}
    ],
    "js":[
        {"title":"post 2","tags":"js"},
        {"title":"post 3","tags":["js","nodejs"]},
        {"title":"post 4","tags":["js","reactjs"]}
    ],
    "nodejs":[
        {"title":"post 3","tags":["js","nodejs"]}
    ],
    "reactjs":[
        {"title":"post 4","tags":["js","reactjs"]}
    ],
    "tailwind":[
        {"title":"post 5","tags":"tailwind"}
    ]
}

**/

const posts = [
    {
        title: 'post 1',
        tags: 'html'
    },
    {
        title: 'post 2',
        tags: 'js'
    },
    {
        title: 'post 3',
        tags: ['js', 'nodejs']
    },
    {
        title: 'post 4',
        tags: ['js', 'reactjs']
    },
    {
        title: 'post 5',
        tags: 'tailwind'
    }
]

const groupBy = (arr, prop) => {
    const mainObj = {}
    arr.forEach(currentObj => {
        const currentKeys = Array.isArray(currentObj[prop]) ? currentObj[prop] : [currentObj[prop]]
        currentKeys.forEach(currentKey => {
            if(!mainObj[currentKey])
                mainObj[currentKey] = []
            mainObj[currentKey].push(currentObj)
        })
    })
    return mainObj
}

const postsGroupedByTags = groupBy(posts, 'tags')

console.log(postsGroupedByTags)