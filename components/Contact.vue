<template>
    <form ref="form" @submit.prevent="sendEmail">
        <div class="datum">
            <label>Name</label>
            <input type="text" name="user_name" />
        </div>
        <div class="datum">
            <label>Email</label>
            <input type="email" name="user_email" />
        </div>
        <div class="datum">
            <label>Message</label>
            <textarea name="message" />
        </div>
        <button type="submit">Contact</button>
        <div :class="messageSent ? 'message-sent' : 'waiting'">Message Sent !</div>
    </form>
</template>

<script setup>
import { ref } from "vue"
import emailjs from "@emailjs/browser"

const config = useRuntimeConfig()
let messageSent = ref(false)
const form = ref(null)

const sendEmail = async () => {
    if (!process.client || !form.value)
        return
    try {
        await emailjs
        .sendForm(config.public.emailJsServiceId, config.public.emailJsTemplateDevId, form.value, {
            publicKey: config.public.emailJsPublicKey,
        })
        console.log("SUCCESS!")
        messageSent.value = true
        form.value.reset()
        setTimeout(() => messageSent.value = false, 2000)
    } catch(error) {
        console.log("FAILED... " + error)
    }
}

</script>

<style lang="scss" scoped>
@import "../assets/variables";

form {
    width: 90%;
    @include flex($direction: column, $justify: space-around);

    .datum {
        width: 100%;
        @include flex($direction: column, $align: flex-start);

        label {
            padding: 10px 0;
        }

        input {
            width: 100%;
            height: 2rem;
            border-radius: 10px;
        }

        textarea {
            width: 100%;
            height: 15rem;
            border-radius: 10px;
        }
    }

    button {
        padding: 5px 10px;
        margin: 15px auto;
        border-radius: 10px;
        font-size: 1.5rem;
        background-color: $orange;

        &:hover, &:active {
            background-color: rgba($orange, 0.75);
        } 
    }

    .waiting {
        opacity: 0;
        padding: 5px 10px;
        border-radius: 10px;
        font-size: 1.5rem;
    }

    .message-sent {
        opacity: 1;
        padding: 5px 10px;
        border-radius: 10px;
        background-color: $orange;
        font-size: 1.5rem;
    }
}
</style>