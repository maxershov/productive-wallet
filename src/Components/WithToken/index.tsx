import React, { useState, useEffect } from 'preact/compat';
import { VNode } from 'preact';
import { getCredentials, setCredentials } from '@/BFF/credentials';
import { cn } from '@/Utils/ClassNames';

import styles from './withToken.module.css';
import global from '@/global.module.css';

type Props = {
  children: VNode<any>;
};

const withToken = ({ children }: Props) => {
  const [tokenExist, setTokenExist] = useState(false);

  useEffect(() => {
    const { api, key } = getCredentials();
    if (api && key) {
      setTokenExist(true);
    }
  }, []);

  function handleTokensSave(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const form = new FormData(target);
    const [api, key] = form.values() as Iterable<string>;
    setCredentials(api, key);
    setTokenExist(true);
  }

  return tokenExist ? (
    children
  ) : (
    <form onSubmit={handleTokensSave}>
      <label className={cn([global.blink, styles.label])}>API</label>
      <input value={''} name="api" required />
      <label className={cn([global.blink, styles.label])}>KEY</label>
      <input value={''} name="key" required />
      <button type="submit">Save</button>
    </form>
  );
};

export default withToken;
