import { Auth } from "aws-amplify";
import { AuthState } from '@aws-amplify/ui-components';

export default {
    async signIn(context, payload) {
        console.log(payload)

        try {
            const user = await Auth.signIn(payload.email, payload.password);
            if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
                return;
            }

            console.log(user)

            // TODO replace with constantsa from AuthState
            context.commit('setAuthState', {authState: AuthState.SignedIn})
            
            return;
        } catch (e) {
            // err
            return;
        }
    }
};