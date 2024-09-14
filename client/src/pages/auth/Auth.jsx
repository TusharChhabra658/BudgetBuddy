import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react"

const Auth = () => {
  return (
    <div className="sign-in-container">
      <SignedOut>
      <h1> Welcome to BudgetBuddy</h1>
        <SignUpButton mode="modal" />
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton mode="modal" />
      </SignedIn>
    </div>
  )
}

export default Auth