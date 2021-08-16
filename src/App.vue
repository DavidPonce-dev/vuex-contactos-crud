<script>
import ListaPersonas from './components/ListaPersonas'
import FormPersonas from './components/FormPersonas'
import Error from './components/Error'
export default{ 
    components:{
      ListaPersonas,
      FormPersonas,
      Error
    },
}
</script>

<template>
  <FormPersonas />
  <ListaPersonas />
  <Error />
</template>