---
layout: layouts/default.hbs
title: Lab 3 solution
permalink: lab3/lab3.html
---

# Comparison of Serverless Function Providers

Serverless computing enables developers to execute code without managing the underlying infrastructure. Here's a comparison of several prominent providers:

## AWS Lambda

- **Overview**: Launched in 2014, AWS Lambda is a mature and widely adopted serverless platform.
- **Language Support**: Supports Node.js, Python, Ruby, Java, Go, .NET Core, and custom runtimes.
- **Pricing**: Charges are based on the number of requests and execution duration, with a free tier offering 1 million requests and 400,000 GB-seconds of compute time per month.
- **Limitations**: Function memory ranges from 128 MB to 10,240 MB; maximum execution timeout is 15 minutes.
- **Integration**: Seamlessly integrates with a vast array of AWS services.

## Microsoft Azure Functions

- **Overview**: Introduced in 2016, Azure Functions is designed for event-driven applications.
- **Language Support**: Supports C#, JavaScript, F#, Java, Python, PowerShell, and custom handlers.
- **Pricing**: Offers a consumption plan with charges based on execution time and memory usage, including a free tier similar to AWS Lambda.
- **Limitations**: Memory allocation up to 1.5 GB; maximum execution timeout is 5 minutes by default, extendable to 60 minutes.
- **Integration**: Tightly integrates with Azure services and provides various deployment options.

## Google Cloud Functions

- **Overview**: Launched in 2017, Google Cloud Functions is a lightweight, event-driven compute solution.
- **Language Support**: Supports Node.js, Python, Go, Java, .NET, Ruby, and PHP.
- **Pricing**: Charges based on the number of invocations, execution time, and memory usage, with a free tier offering 2 million invocations per month.
- **Limitations**: Memory allocation up to 2 GB; maximum execution timeout is 9 minutes.
- **Integration**: Integrates well with Google Cloud services and supports HTTP triggers.

## Netlify Functions

- **Overview**: Netlify Functions offers serverless functions built on AWS Lambda, tailored for frontend developers.
- **Language Support**: Primarily supports JavaScript (Node.js) and Go.
- **Pricing**: Includes a free tier with 125,000 requests per month; beyond that, charges apply based on usage.
- **Limitations**: Memory allocation up to 1024 MB; maximum execution timeout is 10 seconds for free tier and 26 seconds for paid plans.
- **Integration**: Designed to integrate seamlessly with Netlify's frontend hosting services.

**Recommendation**: For a new function, **AWS Lambda** is a robust choice due to its maturity, extensive language support, and deep integration with other AWS services. Its generous free tier allows for cost-effective experimentation and development.

# Comparison of Email Sending Services

When selecting an email sending service, consider factors like deliverability, scalability, pricing, and available features. Here's an overview of notable providers:

## SendGrid

- **Overview**: A cloud-based service offering both transactional and marketing email capabilities.
- **Features**: Provides a comprehensive API, SMTP relay, analytics, and templates.
- **Pricing**: Offers a free tier with 100 emails per day; paid plans start at $15/month.
- **Unique Aspects**: Known for its scalability and robust analytics.

## Mailgun

- **Overview**: Designed primarily for developers, focusing on transactional emails.
- **Features**: Includes a powerful API, SMTP relay, email validation, and analytics.
- **Pricing**: Free tier includes 5,000 emails for the first three months; thereafter, pay-as-you-go pricing.
- **Unique Aspects**: Emphasizes deliverability and offers flexible scaling.

## Mailchimp

- **Overview**: Popular for its marketing email services, also supports transactional emails through its Mandrill add-on.
- **Features**: Drag-and-drop email builder, segmentation, analytics, and automation.
- **Pricing**: Free tier allows up to 10,000 emails per month to 2,000 subscribers; paid plans start at $9.99/month.
- **Unique Aspects**: Comprehensive marketing platform with a user-friendly interface.

**Recommendation**: For sending emails with a free tier, **Mailgun** is a suitable choice, offering 5,000 free emails for the first three months and flexible pay-as-you-go pricing thereafter. Its developer-friendly API and focus on deliverability make it ideal for transactional email needs.
