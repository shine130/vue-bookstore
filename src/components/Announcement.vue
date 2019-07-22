<template>
    <div class="announcement">

    <label>快讯</label>
    <span>{{announcement}}</span>
    </div>
</template>
<style>
    .announcement {
        font-size: 12px;
        padding:5px;
        background:#fff;
    }

    .announcement > label {
        padding: 3px 10px;
        margin: 3px 10px;
        background: #FACCB7;
        border-radius: 3px;
        color: #FF5102;

    }

    .announcement > span {
        padding: 3px 10px;
        color: #333;
        display:inline-block;
    }
</style>
<script>
export default {
    props: ['announcement'],
}
</script>
