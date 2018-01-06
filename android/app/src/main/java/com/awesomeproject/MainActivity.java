package com.awesomeproject;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.ReactDevPermission;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button button = (Button)findViewById(R.id.btn_rn);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (NavigationApplication.instance.getReactGateway().hasStartedCreatingContext()) {
                    NavigationApplication.instance.getEventEmitter().sendAppLaunchedEvent();
                    return;
                }

                if (ReactDevPermission.shouldAskPermission()) {
                    ReactDevPermission.askPermission(MainActivity.this);
                    return;
                }

                if (NavigationApplication.instance.isReactContextInitialized()) {
                    NavigationApplication.instance.getEventEmitter().sendAppLaunchedEvent();
                    return;
                }

                // TODO I'm starting to think this entire flow is incorrect and should be done in Application
                NavigationApplication.instance.startReactContextOnceInBackgroundAndExecuteJS();
            }
        });
    }
}

