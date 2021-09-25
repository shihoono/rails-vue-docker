import Client from '@/api/client'
import { Post, PostForRequest } from '@/types/post'
import {
  getAuthDataFromStorage
} from '@/utils/auth-data'
import { AxiosResponse } from 'axios'

export const createPost = async (formData: PostForRequest) => {
  return await Client.post(
    '/posts', formData,
    {
      headers: getAuthDataFromStorage()
    }
  )
    .then((res: AxiosResponse<Post>) => {
      return res.data
    })
}
