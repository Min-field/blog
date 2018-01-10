import fs from 'fs'
import path from 'path'

import { Post } from './model'

fs.readFile(path.resolve(__dirname, '../article/test.md'), (err, text) => {
    if (err) {
        throw err
    } else {
        const post = new Post ({
            'title': 'title title',
            'post': text.toString(),
            'date': new Date()
        })

        Post.find({title: 'title title'}).exec((err, posts) => {
            console.log(posts)
            !posts.length && post.save()
        })
    }
})