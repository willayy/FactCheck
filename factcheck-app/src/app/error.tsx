"use client" // Error components must be client components
 
import { useEffect } from 'react'
import styles from "./homepage.module.css"
 
export default function NestedRouteError({
  error,
}: Readonly<{
  error: Error & { digest?: string }
}>) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <main>
      <div className={styles.center_aligned_text_box}>
        <h1>Unexpected server runtime error!</h1>
        <h2>Error message</h2>
        <p>{error.message}</p>
      </div>
    </main>
  )
}