import createCharacterService from './characters.factory';

describe('Characters service', () => {
  it('factory should return an initialized service', () => {
    const receivedService = createCharacterService();
    expect(receivedService).toBeDefined();
  });
})