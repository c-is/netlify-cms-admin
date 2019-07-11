import React from 'react'
import styled from '@emotion/styled'
import { Link as BaseLink } from 'react-router-dom'
import { focusableShadow } from '../styles'

const Link = styled(BaseLink)([focusableShadow])

const MaybeLink = props =>
	props.to ? <Link {...props} /> : <span {...props} />
export default MaybeLink
