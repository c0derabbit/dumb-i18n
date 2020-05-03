# dumb-i18n

a (very) dumb i18n hook for react. it translates stuff.

## before we begin

#### is this production-ready?

no! absolutely not.

#### why no tests / type def / …?

time. soon, there will be tests and all.

#### i could do this much better.

cool, prs and issues welcome!

#### surely you’ll have emojis in the readme?

ok, ok. here’s a sloth. 🦥

## usage

### setup
in your function component:
```js
const { t, setLang } = useI18n({ languages });
```

`languages` is just a simple object:
```js
const languages = {
  en: {
    account: {
      title: 'Account',
      changePassword: 'Change password',
    },
  },
  fr: { ... },
};
```

### `t(string)`

```jsx
<h1>{t('account.title')}</h1>
<a href="/change-password">{t('account.changePassword')}</a>

// renders as
<h1>Account</h1>
<a href="/change-password">Change password</a>
```

### `setLang(code)`

```jsx
<button onClick={() => { setLang('fr') }}>français</button>
```
