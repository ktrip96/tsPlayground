import Sidebar from './Sidebar'
import Main from './Main'
import { getPosts, PostType } from '../../api'
import axios from 'axios'
import { useEffect, useState } from 'react'

type Props = {}

const Parent = (props: Props) => {
	const [posts, setPosts] = useState<PostType[]>([])

	useEffect(() => {
		const response = fetchPosts()
		response.then((posts) => setPosts(posts)).catch((e) => console.log(e))
	}, [])
	return (
		<div className='flex w-screen'>
			<Sidebar>
				<h1>Side bar here</h1>
			</Sidebar>
			<Main>
				<h1>Main content here</h1>
				{posts.map((post) => (
					<div key={post.id}>{post.title}</div>
				))}
			</Main>
		</div>
	)
}

async function fetchPosts() {
	try {
		const posts = await getPosts()
		return posts
	} catch (e) {
		console.log('error')
		return [] as PostType[]
	}
}

export default Parent
