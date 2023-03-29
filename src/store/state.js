export default {
	siteInfo: '',
	introduction: {
		avatar: '',
		name: '',
		rollText: [],
	},
	commentQuery: {
		//用于后端判断该评论所在页面类型(文章、友链、关于我)
		page: 0,
		blogId: null,
		pageNum: 1,
		pageSize: 5
	},
	allComment: 0,
	closeComment: 0,
	commentTotalPage: 0,
	comments: [],
	parentCommentId: -1,
	commentForm: {
		content: '',
		nickname: '',
		email: '',
		website: '',
		notice: true
	},
	//博客文章渲染完成的标记
	isBlogRenderComplete: false,
	//受保护文章密码对话框
	blogPasswordDialogVisible: false,
	blogPasswordForm: {
		blogId: 0,
		password: ''
	},
	//专注模式
	focusMode: false,
	//文章页面路由到首页的标记
	isBlogToHome: false,
	//可视窗口大小
	clientSize: {
		clientHeight: 0,
		clientWidth: 1080
	},
	// userInfo
	user:{
		id:'',
		username:'',
		nickname:'',
		password:'',
		avatar: '',
		role: '',
		email: '',
		userFlag:''
	},
	// 修改密码框
	updatePasswordDialogVisible:false,
	updatePasswordForm:{
		id:'',
		oldPassword:'',
		pass:'',
		newPassword:''
	},
	// 增加标签框
	addTagDialogVisible: false,
	// 增加标签的表单
	addTagForm:{
		id:'',
		name: '',
		color: ''
	}
}