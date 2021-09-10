import React from 'react';
import { useFetch } from '../../hooks/useFetch'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface User {
  id: number;
  name: string;
}

export default function User() {
  const { query } = useRouter()
  const { data, error } = useFetch<User>(`users/${query.id}`)

  if (error) return <div>{error.message + data}</div>
  if (!data) return <div>Loading...</div>

return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>voltar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td><Link href={`/users`}>Voltar</Link></td>
        </tr>
      </tbody>
    </table>

  )
}
