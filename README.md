# Verbalyze

Verbalyze is an application that integrates the Google Cloud Natural Language API to provide text-based linguistic data analysis and visualization. 


## Setup and Installation 

- `git clone` this repo 
- `cd` into it 
- `npm install` 
- `cd client && npm install` 
- `cd ..` 
- `cp .env.sample .env`
- Set the `GOOGLE_LANGUAGE_API` environment variable in your `.env` file to `https://language.googleapis.com/v1beta2/documents:annotateText?key=`
- Visit the Google Cloud Natural Language API website. Sign up for the API and create an API key. Set the `GOOGLE_APPLICATION_CREDENTIALS` environment variable in your `.env` file to your new API key. 
- Set the `MONGODB_URL` environment variable in your `.env` file to a valid MongoDB URL.
- `npm run dev` to run a local development server 

## Description 

The Google Cloud Natural Language API offers developers a machine learning model for natural language processing in the form of a REST API. Natural language processing is a field at the intersection of linguistics, computer science, and artificial intelligence. The goal of natural language processing is to program computers so that they have the ability to comprehend human speech. Examples of this technology that are used frequently in daily life include Siri/Alexa, predictive text in text messaging, auto-correct, and the syntax highlighting of word processing platforms like Google Docs when spelling or grammatical errors are detected. 

This application processes text input by the Natural Language API and data points are provided for the sentiment and the magnitude of sentiment expressed in the text. 

The **sentiment score** of a text is represented as a number between -1 and 1. A sentiment score between -1 and -0.25 is classified as negative, -0.24 to 0.25 is classified as neutral, and 0.26 to to 1 is considered positive. 

The **magnitude score** of a text is represented as a number between 0 and +inf. The magnitude score represents the extent to which emotional language (whether positive or negative) is present in a text. A higher magnitude score indicates more frequent expressions of emotion. 

A text with a **sentiment score** falling within the neutral range could indicate either that the text is low-emotion, or that there are both positive and negative emotions expressed within the text. In such cases, the **magnitude score** can be used to assess the extent to which emotional language is present in a text. For example, it can be inferred that a text with a **sentiment score** of 0 and a **magnitude score** of 0.1 is truly neutral in tone, while a text with a **sentiment score** of 0 and a **magnitude score** of 3.6 contains frequent instances of emotional language, both positive and negative. 

## The goals of this project are: 

- To use data gathered from the app to compare and contrast the sentiment and magnitude scores of similar text inputs across multiple languages. For example: if a user inputs *"Yesterday was a very bad day. I was sick."* in English, Spanish, and Chinese, are the scores similar? If so, what inferences can we draw regarding the Natural Language API's algorithmic design and machine learning model? If not, why not? Are languages inherently different in terms of being more positive, neutral, or negative, or in the frequency/extent to which emotion is expressed? Or are dissimilarities a potential result of biases in algorithmic design? In the case of the latter, how might we correct these biases?
- To use the app to analyze stories from news outlets and compare/contrast the sentiment and magnitude scores of various news outlets domestically and globally. Based on data collected, are some news outlets more emotional/positive/negative/neutral than others? Are news outlets from certain countries more emotional/positive/negative/neutral than others? Does this data withstand scrutiny, or is it a result of algorithmic bias? What are the implications for audiences and citizens? How might we use this data to help individuals be more informed producers and consumers of media? 
- To analyze the app's understanding of slang and other contextual nuances of language like idioms and sarcasm. To what extent can the Natural Language API accurately decode these linguistic choices? What does this reveal about cultural attitudes toward language more broadly? How might we improve the ability of natural language processing machine learning models and algorithms to process diverse speech patterns?

## Technology Used 

- Node.js 
- React 
- Express 
- MongoDB 
- Mongoose 
- Material UI 
- Nivo
- Google Cloud Natural Language API
