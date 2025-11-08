export interface Review {
  id: string
  text: string
  author?: string
  stars: number
}

export const googleReviews: Review[] = [
  {
    id: '1',
    text: 'Xpress Care Pharmacy has been a lifesaver for our family. The staff is incredibly knowledgeable and always takes the time to answer our questions. Their delivery service is fast and reliable.',
    author: 'Sarah M.',
    stars: 5
  },
  {
    id: '2',
    text: 'I switched from a big chain pharmacy and couldn\'t be happier. They remember my name, know my medications, and provide personalized care that I never got before. Highly recommend!',
    author: 'James T.',
    stars: 5
  },
  {
    id: '3',
    text: 'The pharmacists here go above and beyond. They coordinated with my doctor to resolve an insurance issue and saved me hundreds of dollars. True community pharmacy at its best.',
    author: 'Linda K.',
    stars: 5
  },
  {
    id: '4',
    text: 'Fast, friendly, and professional service every time. The Med Sync program has made managing my multiple medications so much easier. I never miss a dose now!',
    author: 'Robert D.',
    stars: 5
  },
  {
    id: '5',
    text: 'Best pharmacy experience I\'ve ever had. They take time to explain everything, offer great prices, and the free delivery is incredibly convenient. Feel like part of their family.',
    author: 'Maria G.',
    stars: 5
  }
]






