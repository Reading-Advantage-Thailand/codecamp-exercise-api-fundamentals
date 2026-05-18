# Codecamp Exercise: API Fundamentals

## Learning Objectives

- Understand REST API conventions: methods, status codes, endpoints
- Fetch data from public APIs using `fetch` with async/await
- Display loading states, error states, and empty states
- Parse JSON responses and render data in React components
- Handle pagination and query parameters

## Exercise Instructions

### Build a Data Dashboard

1. **Fork** this repository and **clone** your fork
2. Run `pnpm install` and `pnpm dev`
3. Complete the data-fetching functions and display components

#### Step 1: Fetch Users (`src/lib/api.ts`)
- Implement `fetchUsers()` to GET data from `https://jsonplaceholder.typicode.com/users`
- Implement `fetchUserPosts(userId)` to GET posts for a specific user
- Handle errors and return typed data

#### Step 2: User List Page (`src/app/page.tsx`)
- Fetch users on page load using the server component pattern
- Render each user as a card with name, email, and company
- Link each card to `/users/[id]`

#### Step 3: User Detail Page (`src/app/users/[id]/page.tsx`)
- Fetch a single user and their posts
- Display user information and a list of their posts
- Handle "user not found" with a proper error message

#### Step 4: Loading & Error States
- Add a `loading.tsx` file for the loading state
- Add an `error.tsx` file for the error state
- Show meaningful messages in both states

## Acceptance Criteria

- [ ] User list loads and displays on the home page
- [ ] Clicking a user navigates to their detail page
- [ ] User's posts display on the detail page
- [ ] Loading state shows while data is being fetched
- [ ] Error state shows when fetch fails
- [ ] All fetch calls use proper error handling
- [ ] TypeScript interfaces defined for User and Post

## File Structure

```
codecamp-exercise-api-fundamentals/
├── README.md
├── LICENSE
├── .gitignore
├── package.json
├── next.config.ts
├── tsconfig.json
└── src/
    ├── lib/
    │   └── api.ts           # TODO: Implement fetch functions
    └── app/
        ├── layout.tsx        # Root layout (provided)
        ├── page.tsx          # TODO: User list page
        ├── loading.tsx       # TODO: Loading state
        ├── error.tsx         # TODO: Error state
        └── users/
            └── [id]/
                └── page.tsx  # TODO: User detail page
```

## Commands

```bash
pnpm install     # Install dependencies
pnpm dev     # Start dev server at http://localhost:3000
pnpm build   # Build for production
```
