<script lang="ts">
  type questionsData = {
    question: string;
    answer: string;
    response: string;
    type: 'choice' | 'text' | 'egList' | 'boolean';
    choice?: string[];
  };

  let T = false;
  export let questions: questionsData[];
  let data: questionsData[] = [];

  function click() {
    console.log('Submited...', questions);

    const res = [];
    questions.forEach(e => {
      if (e.response.length > 0) res.push(e);
    });

    if (res.length !== questions.length) {
      console.log('failed oops');
      return alert('Oops, Havent filled in all the questions....');
    }

    data = [];
    questions.forEach(({ answer, question, response, type }) =>
      data.push({
        response,
        question,
        answer: Array.isArray(answer) ? answer : answer.replace('{any}', 'IDK Something like...'),
        type,
      })
    );
    T = !T;
  }

  function restart() {
    console.log('Restarted gg');
    questions.forEach(e => (e.response = ''));
    T = !T;
  }

  function back() {
    console.log('Back wow');
    T = !T;
  }
</script>

{#if T}
  {#each data as { response, question, answer, type }}
    <h1>{question}</h1>
    {#if type === 'text'}
      Response {#if response.length > 0}
        <b><u>{response}</u></b>
      {:else}
        <b>NO Response</b>
      {/if} - {answer}
    {:else if type === 'choice'}
      <!-- if response is the same as answer -->
      {#if answer.includes(response)}
        <span class="correct">✔ "{answer}" == "{response}"</span>
      {:else}
        <span class="wrong">
          ❌ "{answer}" != {#if response.length > 0}
            <b>"{response}"</b>
          {:else}
            <b>NO Response</b>
          {/if}
        </span>
      {/if}
      <!-- if response is the same as answer -->
    {:else if type === 'egList' && Array.isArray(answer)}
      {#if answer.every(text => response.split(/,( +|)/g).includes(text))}
        <span class="correct">✔ "{answer}" == "{response}"</span>
      {:else}
        <span class="wrong">
          ❌ "{answer.join(', ')}" != {#if response.length > 0}
            <b>"{response.split(',').join(', ')}"</b>
          {:else}
            <b>NO Response</b>
          {/if}
        </span>
      {/if}
    {:else if type === 'boolean'}
      <!--  -->
      {#if response === 'TRUE' && answer === 'true'}
        <span class="correct">✔ "{answer}" == "{response}"</span>
      {:else if response === 'FLASE' && answer === 'false'}
        <span class="correct">✔ "{answer}" == "{response}"</span>
      {:else}
        <span class="wrong">
          ❌ "{answer}" != {#if response.length > 0}
            <b>"{response}"</b>
          {:else}
            <b>NO Response</b>
          {/if}
        </span>
      {/if}
      <!--  -->
    {/if}
  {/each}
  <hr />
  <button on:click={restart}>Restart</button>
  <button on:click={back}>GO Back</button>
{:else}
  {#each questions as { question, response, type, choice, answer }}
    <h1>{question}</h1>
    {#if type === 'choice' && Array.isArray(choice)}
      <select bind:value={response}>
        <option>NONE</option>
        {#each choice as key}
          <option value={key}>{key}</option>
        {/each}
      </select>
    {:else if type === 'text'}
      <input type="text" bind:value={response} placeholder="something cool maybe..." />
    {:else if type === 'egList' && Array.isArray(answer)}
      <input type="text" bind:value={response} placeholder="something cool maybe..." />
    {:else if type === 'boolean'}
      <select bind:value={response}>
        <option>NONE</option>
        <option value={'TRUE'}>True</option>
        <option value={'FLASE'}>false</option>
      </select>
    {/if}
  {/each}
  <hr />
  <button on:click={click}>Submit?</button>
{/if}

<style>
  .wrong {
    color: #d64a4a;
  }
  .correct {
    color: #6add34;
  }
  button {
    font-size: 20px;
    padding: 7px 15px 7px 15px;
    transition: padding 0.2s ease-in-out;
    border-radius: 7px;
    border: none;
  }

  button:hover {
    cursor: pointer;
    padding: 8px 18px 8px 18px;
  }

  input {
    padding: 5px;
    border-radius: 6px;
    width: 20%;
    outline: none;
    background-color: #d64a4a;
    color: #ffffff;
    border: none;
    transition: padding 0.2s ease-in-out;
  }

  input::placeholder {
    color: #ffffff;
  }

  select {
    width: 20%;
    border-radius: 3px;
    padding: 4px;
    outline: none;
    background-color: #d64a4a;
    color: #ffffff;
    border: none;
    transition: padding 0.2s ease-in-out;
  }

  select:focus {
    padding: 5px;
  }

  input[type='text']:focus {
    padding: 7px;
    border: 1px solid #555;
  }
</style>
