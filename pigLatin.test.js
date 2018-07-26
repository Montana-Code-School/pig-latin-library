import chai from 'chai';
import index from './index.js';
const expect = chai.expect;

describe('Pig latin test block', () => {
  it ('returns a string', () => {
    expect(index('apple')).to.be.a('string')
  })
  it ('if word begins with vowel then it should end in way', () => {
    expect(index('apple')).to.eql('appleway')
  })
  it ('if word begins with a consonant then it should slice everything before the first vowel, add it to the end, then concat "ay" to the end', () => {
    expect(index('brick')).to.eql('ickbray')
  })
  it ('it should work with proper nouns', () => {
    expect(index('Tyler')).to.eql('Ylertay')
  })
  it ('it should return a statement converted to pig latin with punctuation intact', () => {
    expect(index('I had banana hat song stuck in my head all weekend.'))
       .to
       .eql('Iway adhay ananabay athay ongsay uckstay inway ymay eadhay allway eekendway.')
  })
  it ('it should handle all end sentence punctuation', () => {
    expect(index('Is your dog brown?')).to.eql('Isway ouryay ogday ownbray?')
    expect(index('My dog is brown!')).to.eql('Ymay ogday isway ownbray!')
  })
  it ('it should maintain titleCase in middle of sentence.', () => {
    expect(index('Claire had the Banana Hat Song stuck in her head all weekend.'))
       .to
       .eql('Aireclay adhay ethay Ananabay Athay Ongsay uckstay inway erhay eadhay allway eekendway.')
  })
  it ('q\'s should be treated as a block with "qu" incorporated', () => {
    expect(index('It is quite a long way to the quiet river.'))
       .to.eql('Itway isway itequay away onglay ayway otay ethay ietquay iverray.')
  })
  it ('it should maintain punctuation in middle of sentence.', () => {
    expect(index('Claire had the "Banana Hat Song" stuck in her head all weekend.'))
       .to
       .eql('Aireclay adhay ethay "Ananabay Athay Ongsay" uckstay inway erhay eadhay allway eekendway.')
  })
});
