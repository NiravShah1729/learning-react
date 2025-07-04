import React from 'react'

function Card(props) {
    //console.log(props)
  return (
    <div>
      <img
        src="https://imgs.search.brave.com/RkHtKKIiyRfQkd6tU80NgNgfyh0-3OwtQXZRgH8xa2o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ucHIu/YnJpZ2h0c3BvdGNk/bi5jb20vZGltczMv/ZGVmYXVsdC9zdHJp/cC9mYWxzZS9jcm9w/LzQ3MDZ4MjY0Nysw/KzI0NC9yZXNpemUv/MzAwL3F1YWxpdHkv/ODUvZm9ybWF0L2pw/ZWcvP3VybD1odHRw/Oi8vbnByLWJyaWdo/dHNwb3QuczMuYW1h/em9uYXdzLmNvbS9j/Ni8wOC82MWFlNmU1/MDRkZDVhYzBmOWEw/ZDE0MmJiNTE1L2dl/dHR5aW1hZ2VzLTIy/MDQ0MjkwOTEuanBn"
        alt=""
      />

      <h1 className="text-2xl bg-green-500 p-3 rounded">{props.username}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, nostrum.
      </p>
    </div>
  );
}

export default Card