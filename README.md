# Finiam Cryptobrands Website

A basic Next.js app styled with Tailwind.

## Setup guide

To setup this repo you need to have a couple of things:
- `node` - we recommend `asdf-vm` to manage node versions
- `redis`

You can run our `setup` script to setup the correct node version, if you have `asdf-vm`:
```bash
bin/setup
```

After that, setup a database on your local machine. Just run:
```bash
createdb cryptobrands_dev
```

Then, just create a `.env` file with the following content:
```bash
REDIS_URL="REDIS_URL=redis://localhost"
```

Finally, to setup the database for development just run:
```bash
bin/setup_db
```

Now everything is ready and you can run your dev server and visit the website at `localhost:3000`:
```bash
bin/server
```

## Available Scripts

### bin/setup

Provided you have ASDF, this script will set node versions.

### bin/setup_db

Seeds the database by adding projects and initializing the votes count.

### bin/server

Runs the development server

### bin/lint

Lints all JS and CSS code.

### bin/build

Builds the static site and outputs it on `out`.
