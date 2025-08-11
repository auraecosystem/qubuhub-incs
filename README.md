```bash

/qubuhub-landing
 ├── /pages
 │     ├── api
 │     │    └── blockchain.js          # Blockchain stats API route (mocked)
 │     └── index.js                    # Main landing page with neon, toggle, dashboard, AI helper shell
 ├── /components
 │     ├── CircuitQLogo.js             # SVG glowing Q logo
 │     ├── NeonParticles.js            # Particle background
 │     └── AIHelperWidget.js           # Shell UI for AI helper chat widget
 ├── .github
 │     └── workflows
 │           └── deploy.yml            # GitHub Actions workflow for CI/CD & Vercel deploy
 ├── package.json
 └── next.config.js
```

```bash

![qubuhub-starter](sandbox:/mnt/data/qubuhub_starter.zip?_chatgptios_conversationID=68995f28-c21c-8325-9de2-866b9d5e04d7&_chatgptios_messageID=e5b3d917-8eb8-4654-9fb1-f11c2e376916)
```
```Bash

npx create-next-app qubuhub-landing --use-npm
cd qubuhub-landing
npm install
```
```Bash

npm run dev
```
```Bash

npm install react-tsparticles
```
```Bash
MORALIS_API_KEY=your_moralis_key_here
ALCHEMY_API_KEY=your_alchemy_key_here
