# R&MDB 🎉

Public URL: https://randmdb.vercel.app/

Well, huge thanks for this opportunity, wish you a good time discovering how this small thing works. Let me introduce you to... The rick and Morty characters database! if you want to check info about the APIs take a look at [this documentation](https://rickandmortyapi.com/documentation/#character-schema)

The hardest challenge was fighting against my free time and discovering which _Free interesting API with pagination and no Auth_ were available over th internet. This project mutated a bit during its construction.

At the beginning, this project had no topic related (didn't have a selected API already) and was just Layout, a bit of research, and Reddit questions later, it ended up being a Free Beers dictionary using [Punk API](https://api.punkapi.com/v2/). But on sunday afternoon discovered testing pagination that the API came with some sensitive words that didn't match my principles and this test principle either. So came up with the second option, already recommended by some teammates which was the famous Rick and Morty free API, I haven't watched the show yet, but right now I'm kinda way more interested in the show than before!

Wish you a nice time exploring this repository. It was built using some git-flow vibes, added some local client-side envs to manage the old and new domain switch, added tests, didn't reach 100% coverage but tried to reach as far as I was able to make it jajaja. Aria labels are added almost in any important place to improve screen readers' experience and the listable items can be focused on and clicked with your keyboard to manage some keyboard-only users-experiences.

Added a small Github Action to handle test checks in any push so you can take a look at it and the project was finally deployed using vercel, tried to make it with Heroku but my current org has flagged heroku-github accounts relations.

Huge thanks!

Some points:
- The css code was written trying to follow BEM rules.
- The app was designed mobile-first
- Code was tried to make it as declarative as my time let me able to make it
- Services have their own layer they're not defined in UI elements
- Services are managed through hooks
- Hooks are feeding UI to try to leave it service-logic free
- Hooks have a serializer function to handle backend responses and tweak data if needed trying to reduce data manipulation in the data flow
- Some elements from Hooks have domain-based naming conventions to make it easy to integrate in their respective UI
- Every component lives in Components folder, because it was being modeled based on the development flow without preparation or design definitions
- Would be great to make some elements in a UI folder to make them more atomic and less domain-related (that can be done if the app needs it on certain scalability needs)
- CSS code was written mostly in CSS grid because is easily manageable, especially with re-ordering layouts on responsive designs
- Some styles were stolen from the houm website to get the color scheme and fonts definitions


>This project was bootstrapped with [Create React App](https://github.com/>facebook/create-react-app).

# Scripts

#### Run the web app in local environments
```bash
yarn start
```

#### Test web app in local environments
```bash
yarn test
yarn test:github # to handle CI jobs
```

#### Make a prod build in local environments
```bash
yarn build
```