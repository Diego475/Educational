<template>
  <b-container>
    <b-row class="my-4">
      <b-col class="text-center">
        <h1><slot name="title"></slot></h1>
      </b-col>
    </b-row>
    <b-row class="justify-content-center align-self-center mb-3">
      <b-col cols="6" class="mb-3 my-auto">
        <slot name="body"></slot>
      </b-col>
    </b-row>
  </b-container>
</template>