import React from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import axios from 'axios'

type Props = {}

const Parent = (props: Props) => {
	const queryClient = useQueryClient()
	const query = useQuery('todos')

	return <h1>React Query</h1>
}

export default Parent
