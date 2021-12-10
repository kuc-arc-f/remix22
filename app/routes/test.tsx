/* hook test */
import { useEffect, useRef, useState } from "react";
import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, Link } from "remix";
import { Form, json, useActionData, redirect } from "remix";
import LibTest from '~/lib/LibTest'
import axios from '~/lib/axios'

export let meta: MetaFunction = () => {
  return {
    title: "test",
    description: "Welcome to remix!"
  };
};

export default function Page() {
  LibTest.test1();
  const [items, setItems] = useState([]);
  const onClick = async function(){
    loadItems();
  }
  const loadItems = async function(){
    try{
      const res = await axios.get('/api/hello');
      console.log(res.data);
//      setItems(data);
    } catch (e) {
      console.error(e);
    }
  }
  loadItems();
  return (
    <div className="remix__page">
      <main>
        <h2>Welcome , Test </h2>
        <hr />
        <button onClick={() => onClick()}>Test</button>
        <hr />
        <ul>
        {items.map(item => (
          <li key={item.id} className="remix__page__resource">
            {item.title}
          </li>
        ))}
        </ul>
      </main>
    </div>
  );
}
