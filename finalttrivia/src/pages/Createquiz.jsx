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

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom'

import React, { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Card } from '../components/Card'
import DividerWithText from '../components/DividerWithText'
import { Layout } from '../components/Layout'
import { db } from '../utilities/init-firebase'
import useMounted from '../hooks/useMounted'
import {collection, getDoc, addDoc, documentId} from "firebase/firestore"

export default function Createquiz() {
    
  const [newtitle, setTitle] = useState('')
  const [newdescription, setDescription] = useState('')
  const [newOptionA, setOptionA] = useState('')
  const [newOptionB, setOptionB] = useState('')
  const [newOptionC, setOptionC] = useState('')
  const [newOptionD, setOptionD] = useState('')
  const [newCorrectanswer, setCorrectanswer] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const quizCollectionRef = collection(db, "Quizzes" );



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

            await addDoc(quizCollectionRef, {title: newtitle, question: newdescription, A: newOptionA, B: newOptionB, C: newOptionC, D: newOptionD, correctAnswer: newCorrectanswer})
   

          }}
        >
          <Stack spacing='6'>
            <FormControl id='title'>
              <FormLabel>Quiz Title</FormLabel>
              <Input
                name='title'
                type='text'
                required
                value={newtitle}
                onChange={e => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl id='description'>
              <FormLabel>Question</FormLabel>
              <Input
                name='description'
                type='text'
                value={newdescription}
                required
                onChange={e => setDescription(e.target.value)}
              />
            </FormControl>
            <FormControl id='A'>
              <FormLabel>A</FormLabel>
              <Input
                name='A'
                type='text'
                value={newOptionA}
                required
                onChange={e => setOptionA(e.target.value)}
              />
            </FormControl>
            <FormControl id='B'>
              <FormLabel>B</FormLabel>
              <Input
                name='B'
                type='text'
                value={newOptionB}
                required
                onChange={e => setOptionB(e.target.value)}
              />
            </FormControl>
            <FormControl id='C'>
              <FormLabel>C</FormLabel>
              <Input
                name='C'
                type='text'
                value={newOptionC}
                required
                onChange={e => setOptionC(e.target.value)}
              />
            </FormControl>
            <FormControl id='D'>
              <FormLabel>D</FormLabel>
              <Input
                name='D'
                type='text'
                value={newOptionD}
                required
                onChange={e => setOptionD(e.target.value)}
              />
            </FormControl>
            <FormControl id='Correct Answer'>
              <FormLabel>Correct Answer</FormLabel>
              <Input
                name='Correct Answer'
                type='text'
                value={newCorrectanswer}
                required
                onChange={e => setCorrectanswer(e.target.value)}
              />
            </FormControl>
            {/* <PasswordField /> */}
            <Button
              type='submit'
              colorScheme='telegram'
              size='lg'
              fontSize='md'
              onSubmit={isSubmitting}
            >
              Create Quiz
            </Button>
          </Stack>
        </chakra.form>
      </Card>
    </Layout>
  )
}
