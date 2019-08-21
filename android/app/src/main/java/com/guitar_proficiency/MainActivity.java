package com.guitar_proficiency;

import android.os.Bundle;
import android.view.Window;
import android.view.WindowManager;


import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;

    public class MainActivity extends ReactActivity {
        @Override
        protected void onCreate(Bundle savedInstanceState) {
            this.requestWindowFeature(Window.FEATURE_NO_TITLE);
            getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
            SplashScreen.show(this,R.style.SplashScreenTheme);  // here
            super.onCreate(savedInstanceState);
        }
        /**
         * Returns the name of the main component registered from JavaScript.
         * This is used to schedule rendering of the component.
         */
    @Override
    protected String getMainComponentName() {
        return "GUITAR_PROFICIENCY";
    }
}
