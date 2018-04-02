/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
*/
package org.apache.cordova;

import java.security.Principal;
import java.security.PrivateKey;
import java.security.cert.X509Certificate;

<<<<<<< HEAD
import android.annotation.SuppressLint;
=======
>>>>>>> 1495c85eeabdb6bb12301ea901f566a164d0f626
import android.webkit.ClientCertRequest;

/**
 * Implementation of the ICordovaClientCertRequest for Android WebView.
<<<<<<< HEAD
 *
=======
>>>>>>> 1495c85eeabdb6bb12301ea901f566a164d0f626
 */
public class CordovaClientCertRequest implements ICordovaClientCertRequest {

    private final ClientCertRequest request;

    public CordovaClientCertRequest(ClientCertRequest request) {
        this.request = request;
    }
    
    /**
     * Cancel this request
     */
<<<<<<< HEAD
    @SuppressLint("NewApi")
=======
>>>>>>> 1495c85eeabdb6bb12301ea901f566a164d0f626
    public void cancel()
    {
        request.cancel();
    }
    
    /*
     * Returns the host name of the server requesting the certificate.
     */
<<<<<<< HEAD
    @SuppressLint("NewApi")
=======
>>>>>>> 1495c85eeabdb6bb12301ea901f566a164d0f626
    public String getHost()
    {
        return request.getHost();
    }
    
    /*
     * Returns the acceptable types of asymmetric keys (can be null).
     */
<<<<<<< HEAD
    @SuppressLint("NewApi")
=======
>>>>>>> 1495c85eeabdb6bb12301ea901f566a164d0f626
    public String[] getKeyTypes()
    {
        return request.getKeyTypes();
    }
    
    /*
     * Returns the port number of the server requesting the certificate.
     */
<<<<<<< HEAD
    @SuppressLint("NewApi")
=======
>>>>>>> 1495c85eeabdb6bb12301ea901f566a164d0f626
    public int getPort()
    {
        return request.getPort();
    }
    
    /*
     * Returns the acceptable certificate issuers for the certificate matching the private key (can be null).
     */
<<<<<<< HEAD
    @SuppressLint("NewApi")
=======
>>>>>>> 1495c85eeabdb6bb12301ea901f566a164d0f626
    public Principal[] getPrincipals()
    {
        return request.getPrincipals();
    }
    
    /*
     * Ignore the request for now. Do not remember user's choice.
     */
<<<<<<< HEAD
    @SuppressLint("NewApi")
=======
>>>>>>> 1495c85eeabdb6bb12301ea901f566a164d0f626
    public void ignore()
    {
        request.ignore();
    }
    
    /*
     * Proceed with the specified private key and client certificate chain. Remember the user's positive choice and use it for future requests.
     * 
     * @param privateKey The privateKey
     * @param chain The certificate chain 
     */
<<<<<<< HEAD
    @SuppressLint("NewApi")
=======
>>>>>>> 1495c85eeabdb6bb12301ea901f566a164d0f626
    public void proceed(PrivateKey privateKey, X509Certificate[] chain)
    {
        request.proceed(privateKey, chain);
    }
}
