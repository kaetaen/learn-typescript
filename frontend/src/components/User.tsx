import React from 'react'

interface IUser {
  user: string
  email?: string
}

interface Props {
  user: IUser
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <strong> Nome: </strong> {user.name} </ br>
      <strong> Nome: </strong> {user.email} </ br>
    </div>
  )
}

export default User
