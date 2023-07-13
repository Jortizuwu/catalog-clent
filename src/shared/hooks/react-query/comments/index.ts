import { useQuery } from 'react-query'
import { useState } from 'react'
import commentServices from '../../../services/comments'
import { QUERY_KEYS } from '../../../constant/queryKyes'

export const useGetCommnetsByPublicationId = (publicationId, page, load) => {
  const [comments, setComments] = useState([])
  const [empty, setEmpty] = useState(false)

  const { isLoading } = useQuery(
    [QUERY_KEYS.COMMENTS, page, publicationId],
    () => commentServices.getCommetsByPublicationId(publicationId, page),
    {
      enabled: load === true && !!publicationId && !empty,
      refetchOnWindowFocus: false,
      onSuccess: (pages) => {
        setComments([...pages.content, ...comments])
        setEmpty(pages.empty)
      }
    }
  )

  return {
    comments,
    isLoading
  }
}
