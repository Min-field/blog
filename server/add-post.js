import fs from 'fs'
import path from 'path'
import MarkDownIt from 'markdown-it'

// import { Post } from './model'

const md = new MarkDownIt()

fs.readFile(path.resolve(__dirname, '../article/test.md'), (err, text) => {
    if (err) {
        throw err
    } else {
        console.log(md.render(text.toString()))
        // 添加到数据库的逻辑
        // const post = new Post ({
        //     'title': 'title title',
        //     'post': text.toString(),
        //     'date': new Date()
        // })

        // Post.find({title: 'title title'}).exec((err, posts) => {
        //     console.log(posts)
        //     !posts.length && post.save()
        // })
    }
})