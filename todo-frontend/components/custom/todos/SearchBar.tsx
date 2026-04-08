"use client"
import { useRef } from 'react'
import { Input } from '../../ui/input'
import { useQuery } from '@tanstack/react-query'
import { getTodos } from '@/lib/api/Todo'

const SearchBar = () => {
const inputRef = useRef(null)





  return (
    <div className='mb-4 w-full rounded-2xl p-2 '>
                <Input ref={inputRef} name='search' placeholder='Search Tasks...' className='rounded-2xl'/>
    </div>
  )
}

export default SearchBar