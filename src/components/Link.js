// Based on https://sven-roettering.de/external-gatsby-links/
import React from 'react'
import { Link as DSLink } from '@hackclub/design-system'
import { Link as GatsbyLink } from 'gatsby'


const isExternalLink = path => path.startsWith('http') || path.startsWith('//:')

const Link = ({ to, children, ...props }) =>
  isExternalLink(to) ? (
    <DSLink href={to} {...props}>
      {children}
    </DSLink>
  ) : (
    <GatsbyLink to={to} {...props}>
      {children}
    </GatsbyLink>
  )

export default Link
