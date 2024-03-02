import TweetRepository from "../../src/repository/tweet-repository";
import Tweet from '../../src/models/tweet.js'

jest.mock('../../src/models/tweet.js')

describe('Create tweet tests', () => {
    test('Should create a new tweet and return it', async() => {
        const data = {
            content : 'Testing Tweet'
        }
        const spy = jest.spyOn(Tweet, 'create').mockImplementation(() => {
            return {...data, createdAt: '2012-01-02', updatedAt: '2012-01-02'}
        })
        const tweetRepository = new TweetRepository();
        const tweet = await tweetRepository.create(data);
    
        expect(spy).toHaveBeenCalled();
        expect(tweet.content).toBe(data.content);
        expect(tweet.createdAt).toBeDefined();
    });
    test('Should not create a tweet and throw exception', async() => {
        const data= {
            content: 'Testing Tweet'
        }
        const spy= jest.spyOn(Tweet, 'create').mockImplementation(() => {
            throw new Error('something went wrong')
        });
        const tweetRepository = new TweetRepository() ;
        const tweet = await tweetRepository.create(data).catch(err => {
            expect(err).toBeInstanceOf(Error);
            expect(err.message).toBe('something went wrong');
        });
    }); 
})

describe('Get all tweet tests', () => {
    test('testing limit for getAll', async() => {
        const data = {
            content : 'Testing Tweet'
        }
        const tweetsArray = [{...data, createdAt: '2012-01-02', updatedAt: '2012-01-02'},{...data, createdAt: '2012-01-02', updatedAt: '2012-01-02'},{...data, createdAt: '2012-01-02', updatedAt: '2012-01-02'}]
        const findResponse = {tweetsArray};
        findResponse.limit = jest.fn((limit) => findResponse.tweetsArray.slice(0, limit));
        findResponse.skip = jest.fn((offset) => findResponse);
        const spy = jest.spyOn(Tweet, 'find').mockImplementation(() => {
            return findResponse
        })
        const tweetRepository = new TweetRepository();
        const tweets = await tweetRepository.getAll(0,2);
        
        expect(spy).toHaveBeenCalled();
        expect(tweets).toHaveLength(2);
    })
})