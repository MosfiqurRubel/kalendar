<template>
    <kalendar
        v-if="check == true"
        :configuration="calendar_settings"
        :events.sync="events"
        :activityOfWeek="activityOfWeek"
        :pos="pos"
        :available_activities="available_activities"
    >
        <!-- CREATED CARD SLOT -->
        <div
            slot="created-card"
            slot-scope="{ event_information }"
            class="details-card"
        >
            <h4 class="appointment-title">
                {{ event_information.data.title }}
            </h4>
            <small>
                {{ event_information.data.description }}
            </small>
            <span class="time"
                >{{ event_information.start_time | formatToHours }} -
                {{ event_information.end_time | formatToHours }}</span
            >
        </div>
        <!-- CREATING CARD SLOT -->
        <div slot="creating-card" slot-scope="{ event_information }">
            <h4 class="appointment-title" style="text-align: left;">
                New Appointment
            </h4>
            <span class="time">
                {{ event_information.start_time | formatToHours }}
                -
                {{ event_information.end_time | formatToHours }}
            </span>
        </div>
        <!-- POPUP CARD SLOT -->
        <div
            slot="popup-form"
            slot-scope="{ popup_information }"
            style="display: flex; flex-direction: column;"
        >
            <h4 style="margin-bottom: 10px">
                New Appointment
            </h4>
            <input
                v-model="new_appointment['num_of_participants']"
                type="number"
                name="Number of participant"
                placeholder="Number of participant"
            />
            <input
                v-model="new_appointment['age_max']"
                type="number"
                name="Age Max"
                placeholder="Age max"
            />
            <input
                v-model="new_appointment['age_min']"
                type="number"
                name="Age Min"
                placeholder="Age min"
            />
            <div class="buttons">
                <button class="cancel" @click="closePopups()">
                    Cancel
                </button>
                <button @click="addAppointment(popup_information)">
                    Save
                </button>
            </div>
        </div>
    </kalendar>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import Kalendar from '@/lib-components/kalendar-container.vue';
import { DateTime } from 'luxon';

let today = new Date();

function getCurrentDay() {
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    return today.toISOString();
}

// change the dates on _existing events to this week
//const startDate = new Date(_existing_events[0].from).getUTCDate();

function makeNow(dateString) {
    const d = new Date(dateString);
    d.setYear(today.getUTCFullYear());
    d.setMonth(today.getUTCMonth());
    d.setDate(today.getUTCDate() + (d.getUTCDate() - startDate));
    return d.toISOString();
}

const _existing_events = [
    {
        from: '2021-12-01T10:00:00.000Z',
        to: '2021-12-01T11:00:00.000Z',
        activity_id: 292,
        data: {
            num_of_participants: 10,
            age_max: 15,
            age_min: 10,
        },
    },
    {
        from: '2021-12-02T11:00:00.000Z',
        to: '2021-12-02T12:00:00.000Z',
        activity_id: 291,
        data: {
            num_of_participants: 10,
            age_max: 15,
            age_min: 10,
        },
    },
    {
        from: '2021-12-03T14:00:00.000Z',
        to: '2021-12-03T15:00:00.000Z',
        activity_id: 295,
        data: {
            num_of_participants: 10,
            age_max: 15,
            age_min: 10,
        },
    },
    {
        from: '2021-12-04T16:00:00.000Z',
        to: '2021-12-04T17:00:00.000Z',
        activity_id: 291,
        data: {
            num_of_participants: 10,
            age_max: 15,
            age_min: 10,
        },
    },
];

export default {
    created() {
        Vue.filter('formatToHours', (value, how) => {
            let dt = DateTime.fromISO(value);
            return dt.toLocaleString(DateTime.TIME_24_SIMPLE);
        });
    },
    beforeCreate() {
        axios
            .get(
                `http://www.learningbali.com/strapi/api/getCurrentWeekActivity`
            )
            .then(response => {
                this.events = response.data.booked_activitites;
                this.activityOfWeek = response.data.activityOfWeek;
                this.available_activities = response.data.available_activities;
                this.check = true;
            });
    },
    components: {
        Kalendar,
    },
    data() {
        return {
            calendar_settings: {
                view_type: 'week',
                cell_height: 10,
                scrollToNow: false,
                //start_day: getCurrentDay(),
                military_time: false,
                read_only: false,
                day_starts_at: 0,
                day_ends_at: 24,
                overlap: true,
                hide_dates: ['2019-08-09'],
                hide_days: [],
                past_event_creation: true,
            },
            pos: 0,
            check: null,
            events: [],
            available_activities: [],
            activityOfWeek: [],
            new_appointment: {},
        };
    },
    methods: {
        addAppointment(popup_info) {
            let payload = {
                data: {
                    num_of_participants: this.new_appointment
                        .num_of_participants,
                    age_max: this.new_appointment.age_max,
                    age_min: this.new_appointment.age_min,
                },
                from: popup_info.start_time,
                to: popup_info.end_time,
            };

            this.$kalendar.addNewEvent(payload);
            this.$kalendar.closePopups();
            this.clearFormData();
        },
        closePopups() {
            this.$kalendar.closePopups();
        },
        clearFormData() {
            this.new_appointment = {
                description: null,
                title: null,
            };
        },
        addManually() {
            let title = 'New one';
            let description = 'Lorem dsr';
            let from = makeNow('2019-07-12T10:22:00+02:00');
            let to = makeNow('2019-07-13T11:20:00+02:00');
            let payload = {
                data: { title, description },
                from,
                to,
            };
            this.$kalendar.addNewEvent(payload);
        },
        removeEvent(kalendarEvent) {
            let day = kalendarEvent.start_time.slice(0, 10);
            this.$kalendar.removeEvent({
                day,
                key: kalendarEvent.key,
                id: kalendarEvent.kalendar_id,
            });
        },
    },
};
</script>

<style lang="scss">
$green: #00f0b5;
$red: #f61067;

.details-card {
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 100%;

    button {
        margin: 0;
        border: none;
        color: #4c4b4b;
        position: absolute;
        padding-right: 0px;
        top: 5px;
        right: 5px;
        cursor: pointer;
        background: transparent;

        svg {
            width: 18px;
            height: 18px;
            fill: white;
        }
    }

    .remove {
        opacity: 0;
        transition: opacity 0.15s;
    }

    &:hover .remove {
        opacity: 1;
    }
}

.popup-event .buttons {
    display: flex;
    justify-content: space-between;
}

.popup-event .buttons button {
    border: none;
    color: #29771c;
    background-color: rgba($green, 0.04);
    padding: 5px 10px;

    &.cancel {
        background-color: rgba($red, 0.04);
        color: $red;
    }
}
</style>
