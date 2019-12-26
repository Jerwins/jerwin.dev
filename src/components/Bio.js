import React from 'react'

// Import typefaces
import 'inter-ui'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

export default function Bio() {
  return (
    <div
      itemScope
      itemProp="author"
      itemType="http://schema.org/Person"
      className="bio"
      style={{ display: 'flex' }}
    >
      <img
        src={profilePic}
        alt="Jerwin Samuel"
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: rhythm(2.8),
          height: rhythm(2.8)
        }}
      />
      <p style={{ marginBottom: 0 }}>
        👋 Personal blog by{' '}
        <a href="https://jerwin.dev" itemProp="name">
          Jerwin Samuel
        </a>
        <br />
        ⭐️ <span itemProp="jobTitle">Software Engineer</span> -{' '}
        <a href="https://github.com/jerwins">GitHub</a>
        <br />
        🐦 Follow me on{' '}
        <a href="https://twitter.com/jerwinsamuel" itemProp="url">
          Twitter
        </a>
      </p>
    </div>
  )
}
