// 【文章】数据表数据模型文件
var mongoose = require('mongoose')

var articleSchema = new mongoose.Schema({
	userId: { // 作者id
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	},
	title: { // 文章标题
		type: String,
		required: true
	},
	content: { // 文章内容
		type: String,
		required: true
	},
	abstract: {
		type: String,
		required: true
	},
	tags: { // 文章标签
		type: String,
		required: true
	},
	type: { // 文章分类
		type: String,
		required: true
	},
	publishTime: { // 发布时间
		type: Date,
		default: Date.now
	},
	readTimes: { // 阅读数
		type: Number,
		default: 0
	},
	aticleCollect: { // 收藏数
		type: Number,
		default: 0
	},
	likeNum: { // 点赞数
		type: Number,
		default: 0
	}
})

mongoose.model('article', articleSchema)