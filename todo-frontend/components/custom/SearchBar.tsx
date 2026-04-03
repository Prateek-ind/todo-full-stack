"use client"
import { Input } from '../ui/input'

const SearchBar = () => {
  return (
    <div className='mb-4'>
                <Input name='search' placeholder='Search Tasks...' className='rounded-2xl'/>
    </div>
  )
}

export default SearchBar