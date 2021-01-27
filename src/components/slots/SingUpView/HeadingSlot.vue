<template>
  <b-container>
    <b-row class="my-4">
      <b-col class="text-center">
        <h1><slot name="title"></slot></h1>
      </b-col>
    </b-row>
    <b-row class="justify-content-center mb-5">
      <b-col cols="12" md="9" lg="8" xl="6">
        <slot name="body"></slot>
      </b-col>
    </b-row>
  </b-container>
</template>