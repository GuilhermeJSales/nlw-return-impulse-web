import { useState } from "react";

import { CloseButton } from "../CloseButton";

import  bugImageUrl from '../../assets/bug.svg'
import  ideaImageUrl from '../../assets/idea.svg'
import  thoughtImageUrl from '../../assets/thought.svg'

import {FeedbackTypeStep} from './Steps/FeedbackTypeStep'
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title:'Problema',
    image: {
      source: bugImageUrl,
      alt: 'imagem de uma centopeia',
    },
  },
  IDEA: {
    title:'Ideia',
    image: {
      source: ideaImageUrl,
      alt:'imagem de uma lampada',
    },

  },
  OTHER: {
    title:'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'imagem de um balão de pensamento',
    },
  },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      { feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequest={handleRestartFeedback}/>
      ) : (
        <>
      {!feedbackType ? (
       <FeedbackTypeStep  onFeedbackTypeChanged={setFeedbackType}/>
      ) : (
      <FeedbackContentStep 

      feedbackType={feedbackType} 
      onFeedbackRestartRequested={handleRestartFeedback}
      onFeedbackSent={()=> setFeedbackSent(true)}
      />
      )}
        </>
      )}


      <footer className="text-xs text-neutral-400">
      Feito com ♥ por Guilherme Jesus Sales
      </footer>
    </div>
  )
}