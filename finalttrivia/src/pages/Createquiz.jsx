import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react'

import React, { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Card } from '../components/Card'
import DividerWithText from '../components/DividerWithText'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'
import useMounted from '../hooks/useMounted'

export default function Createquiz() {
    
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)



  return (

    <Layout>
      <Heading textAlign='center' my={12}>
        Create Quiz
      </Heading>
      <Card maxW='md' mx='auto' mt={4}>
        <chakra.form
          onSubmit={async e => {
            e.preventDefault()
            setIsSubmitting(true)

            const currentQuizId = Math.floor(100000+ Math.random()*9000).toString();

            await Createquiz(currentQuizId,title,description);
            
          }}
        >
          <Stack spacing='6'>
            <FormControl id='title'>
              <FormLabel>Quiz Title</FormLabel>
              <Input
                name='title'
                type='text'
                required
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl id='description'>
              <FormLabel>Quiz Description</FormLabel>
              <Input
                name='description'
                type='text'
                value={description}
                required
                onChange={e => setDescription(e.target.value)}
              />
            </FormControl>
            {/* <PasswordField /> */}
            <Button
              type='submit'
              colorScheme='telegram'
              size='lg'
              fontSize='md'
              isLoading={isSubmitting}
            >
              Create Quiz
            </Button>
          </Stack>
        </chakra.form>
      </Card>
    </Layout>
  )
}
